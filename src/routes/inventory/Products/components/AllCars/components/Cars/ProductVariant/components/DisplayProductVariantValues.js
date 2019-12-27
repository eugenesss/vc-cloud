import React, {PureComponent} from "react";
import Checkbox from '@material-ui/core/Checkbox';


export default class Index extends PureComponent {

  render () {

    const item = this.props.ProductVariantValues
    const index = this.props.index

    
    return (
        <div className="d-flex" style={{justifyContent:'space-between', flex:1}}>

            <div style={{display:'flex', flexDirection:"column", flex:1, justifyContent:'center'}}>
                <span>{item.name}</span>
            </div>
            
            <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'center'}}>
                {item.files.length > 0 && 
                    <img
                        src={item.files[0].url}
                        height={100}
                        width={100}
                    />
                }
            </div>

            <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'center'}}>
                <span>{item.price}</span>
            </div>

            <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'center'}}>
                <Checkbox
                    checked={item.isDefault}
                    name="isDefault"
                />   
            </div>

            <button onClick={() => this.props._DeleteProductVariant(index)}>X</button>
            
        </div>
    );
  }
};

