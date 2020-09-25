import React, {Component} from "react";
import { connect } from "react-redux";

// page req
import Helmet from "Components/Helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//sub components
import Dropzone from "Components/Dropzone";
import FormInput from "Components/Form/FormInput";
import Button from "Components/Inventory/Button";
import StaticName from "Components/Inventory/StaticName";
import BlobImage from "Components/Inventory/BlobImage";
import ReactQuill from "react-quill";
import DatePickerInput from "Components/Form/Pickers/DatePicker";
import DialogRoot from "Components/Dialog/DialogRoot";

import PublishModal from "../components/PublishModal";

//css
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

//actions
import { newBlog } from "Ducks/cms/blog";

class BlogNewPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            blogPhoto: [],
            blogPhotoString: [],
            content: '',
            publishDate: '',
            keywords: '',
            tags: '',
            toggle: false
        };

        this.modules = {
            toolbar: {
                container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" }
                    ],
                    ["link", "image"]
                ]
            },
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false
            }
        };
        this.formats = [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image"
        ];
    }

    saveblog = () => {
        this.setState({ toggle: true })
    };

    handleChange = (field, value) => {
        this.setState({ ...this.state, [field]: value });
    };

    handleUpload = file => {
        const item = URL.createObjectURL(file[0]);
        let CloneEditedImages = file;
        let CloneEditedImagesStrings = [item];

        this.setState(state => ({
            ...state,
            blogPhoto: CloneEditedImages,
            blogPhotoString: CloneEditedImagesStrings
        }));
    };

    removeFile = () => {
        this.setState(state => ({
            ...state,
            blogPhoto: [],
            blogPhotoString: []
        }));
    };

    publishArticle = (pn) => {
        let keys = this.state.keywords.split(',');
        let tags = this.state.tags.split(',');
        let params = {
            title: this.state.title,
            articleImage: this.state.blogPhoto,
            publishDate: this.state.publishDate,
            content: this.state.content,
            keywords: keys,
            tags: tags,
            status: pn
        };
        this.props.newBlog(params);
        this.setState({toggle: false})
    };

    render() {
        return (
            <React.Fragment>
                <Helmet title="New Blog" />
                <PageTitleBar
                    title="Blog New Page"
                />

                <div className="ml-50 mr-50 bg-white shadow shadow-lg border-rad-md border-dark"
                     style={{
                         boxShadow: `0px 0px 5px grey`,
                         padding: 80
                     }}
                >
                    <h3 className="text-muted text-center text-gray">Input your Blog Title</h3>
                    <FormInput
                        label="Title"
                        value={this.state.title}
                        required={!this.state.title}
                        target="title"                                                                               //input car name
                        handleChange={this.handleChange}
                    />

                    <div className="text-center mt-30">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 10,
                                marginBottom: 10
                            }}
                        >
                            <div
                                style={{ display: "flex", flexDirection: "column", flex: 0.5 }}
                            >
                                <StaticName title="UPLOAD BLOG IMAGE" />
                                <Dropzone
                                    onDrop={this.handleUpload}
                                    uploadedFiles={[]}
                                    additionalText="Files can't be edited once uploaded."
                                />
                            </div>

                            <div className="d-flex flex-column" style={{ flex: 0.5 }}>
                                <StaticName title="PREVIEW BLOG IMAGE" />
                                {this.state.blogPhotoString.length > 0 && (
                                    <div className="d-flex flex justify-content-center">
                                        <BlobImage
                                            imageSource={this.state.blogPhotoString}
                                            url={false}
                                            remove={true}
                                            removeNewImages={this.removeFile}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <h3 className="text-muted text-center text-gray mb-10 mt-50">Publish Date</h3>
                    <div className="w-100">
                        <DatePickerInput
                            label="Publish Date"
                            value={
                                this.state.publishDate ? this.state.publishDate : null
                            }
                            target="publishDate"
                            handleChange={this.handleChange}
                        />
                    </div>

                    <h3 className="text-muted text-center text-gray mb-10 mt-50">Article Content</h3>
                    <div className="w-100">
                        <ReactQuill
                            theme="snow"
                            modules={this.modules}
                            formats={this.formats}
                            onChange={html => this.setState({content: html})}
                            value={this.state.content}
                            style={{height: 300, borderBottom: '1px solid grey'}}
                        />
                    </div>

                    <h3 className="text-muted text-center text-gray mt-30">Input your SEO Keywords</h3>
                    <FormInput
                        label="SEO Keywords"
                        value={this.state.keywords}
                        target="keywords"                                                                               //input car name
                        handleChange={this.handleChange}
                    />

                    <h3 className="text-muted text-center text-gray mt-30">Input your SEO Meta Tags</h3>
                    <FormInput
                        label="SEO Meta Tags"
                        value={this.state.tags}
                        target="tags"                                                                               //input car name
                        handleChange={this.handleChange}
                    />

                    <Button
                        divStyle={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                        _Function={this.saveblog}
                        title="Save"
                    />
                </div>


                <DialogRoot
                    size="md"
                    show={this.state.toggle}
                    handleHide={() => this.setState({toggle: false})}
                >
                    <PublishModal
                        publishArticle={this.publishArticle}
                    />
                </DialogRoot>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ cmsState }) => {
    const { blogState } = cmsState;
    return { blogState };
};

export default connect(mapStateToProps, {
    newBlog
})(BlogNewPage)
