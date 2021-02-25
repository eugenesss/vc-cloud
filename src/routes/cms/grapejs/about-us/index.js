import React, {Component} from "react";
import 'grapesjs/dist/css/grapes.min.css';


import grapesjs from 'grapesjs';
import grapesjsloryslider from 'grapesjs-lory-slider';
import grapesjstabs from 'grapesjs-tabs';
import grapesjscustomcode from 'grapesjs-custom-code';
import grapesjstouch from 'grapesjs-touch';
import grapesjsparserpostcss from 'grapesjs-parser-postcss';
import grapesjstooltip from 'grapesjs-tooltip';
import grapesjstuiimageeditor from 'grapesjs-tui-image-editor';
import grapesjstyped from 'grapesjs-typed';
import grapesjsstylebg from 'grapesjs-style-bg';
import gjspresetwebpage from 'grapesjs-preset-webpage';
import toastr from 'toastr';

import grapesjslogo from 'Assets/img/grapejsStock/grapesjs-logo-cl.png';

import aboutUsBgImage from "Assets/img/grapejsStock/about-us-banner.jpg"


class GrapeJSAbout extends Component {

  saveHTML = () => {
    // alert("PING")
    var test = document.querySelector("#gjs");
    console.log(test);
  }


  componentDidMount(){

    var lp = './img/';
    var plp = '//placehold.it/350x250/';
    var images = [
      lp+'team1.jpg', lp+'team2.jpg', lp+'team3.jpg', plp+'78c5d6/fff/image1.jpg', plp+'459ba8/fff/image2.jpg', plp+'79c267/fff/image3.jpg',
      plp+'c5d647/fff/image4.jpg', plp+'f28c33/fff/image5.jpg', plp+'e868a2/fff/image6.jpg', plp+'cc4360/fff/image7.jpg',
      lp+'work-desk.jpg', lp+'phone-app.png', lp+'bg-gr-v.png'
    ];
    let height = window.innerHeight + 90;

    const editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#gjs',
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: height+'px',
        width: 'auto',
        // Disable the storage manager for the moment
        storageManager: false,
        // Avoid any default panel
        panels: { defaults: [] },           
        selectorManager: { componentFirst: true },
        styleManager: { clearProperties: 1 },
        plugins: [
          grapesjsloryslider,
          grapesjstabs,
          grapesjscustomcode,
          grapesjstouch,
          grapesjsparserpostcss,
          grapesjstooltip,
          grapesjstuiimageeditor,
          grapesjstyped,
          grapesjsstylebg,
          gjspresetwebpage,
          toastr
        ],
        pluginOpts: {
          'grapesjs-lory-slider': {
            sliderBlock: {
              category: 'Extra'
            }
          },
          'grapesjs-tabs': {
            tabsBlock: {
              category: 'Extra'
            }
          },
          'grapesjs-typed': {
            block: {
              category: 'Extra',
              content: {
                type: 'typed',
                'type-speed': 40,
                strings: [
                  'Text row one',
                  'Text row two',
                  'Text row three',
                ],
              }
            }
          },
          'gjs-preset-webpage': {
            modalImportTitle: 'Import Template',
            modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
            modalImportContent: function(editor) {
              console.log("ASDASDS", editor)

              return editor.getHtml() + '<style>'+editor.getCss()+'</style>'
            },
            filestackOpts: null, //{ key: 'AYmqZc2e8RLGLE7TGkX3Hz' },
            aviaryOpts: false,
            blocksBasicOpts: { flexGrid: 1 },
            customStyleManager: [{
              name: 'General',
              buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
              properties:[{
                  name: 'Alignment',
                  property: 'float',
                  type: 'radio',
                  defaults: 'none',
                  list: [
                    { value: 'none', className: 'fa fa-times'},
                    { value: 'left', className: 'fa fa-align-left'},
                    { value: 'right', className: 'fa fa-align-right'}
                  ],
                },{ property: 'position', type: 'select'}
              ],
            },{
                name: 'Dimension',
                open: false,
                buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                properties: [{
                  id: 'flex-width',
                  type: 'integer',
                  name: 'Width',
                  units: ['px', '%'],
                  property: 'flex-basis',
                  toRequire: 1,
                },{
                  property: 'margin',
                  properties:[
                    { name: 'Top', property: 'margin-top'},
                    { name: 'Right', property: 'margin-right'},
                    { name: 'Bottom', property: 'margin-bottom'},
                    { name: 'Left', property: 'margin-left'}
                  ],
                },{
                  property  : 'padding',
                  properties:[
                    { name: 'Top', property: 'padding-top'},
                    { name: 'Right', property: 'padding-right'},
                    { name: 'Bottom', property: 'padding-bottom'},
                    { name: 'Left', property: 'padding-left'}
                  ],
                }],
              },{
                name: 'Typography',
                open: false,
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
                properties:[
                  { name: 'Font', property: 'font-family'},
                  { name: 'Weight', property: 'font-weight'},
                  { name:  'Font color', property: 'color'},
                  {
                    property: 'text-align',
                    type: 'radio',
                    defaults: 'left',
                    list: [
                      { value : 'left',  name : 'Left',    className: 'fa fa-align-left'},
                      { value : 'center',  name : 'Center',  className: 'fa fa-align-center' },
                      { value : 'right',   name : 'Right',   className: 'fa fa-align-right'},
                      { value : 'justify', name : 'Justify',   className: 'fa fa-align-justify'}
                    ],
                  },{
                    property: 'text-decoration',
                    type: 'radio',
                    defaults: 'none',
                    list: [
                      { value: 'none', name: 'None', className: 'fa fa-times'},
                      { value: 'underline', name: 'underline', className: 'fa fa-underline' },
                      { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
                    ],
                  },{
                    property: 'text-shadow',
                    properties: [
                      { name: 'X position', property: 'text-shadow-h'},
                      { name: 'Y position', property: 'text-shadow-v'},
                      { name: 'Blur', property: 'text-shadow-blur'},
                      { name: 'Color', property: 'text-shadow-color'}
                    ],
                }],
              },{
                name: 'Decorations',
                open: false,
                buildProps: ['opacity', 'border-radius', 'border', 'box-shadow', 'background-bg'],
                properties: [{
                  type: 'slider',
                  property: 'opacity',
                  defaults: 1,
                  step: 0.01,
                  max: 1,
                  min:0,
                },{
                  property: 'border-radius',
                  properties  : [
                    { name: 'Top', property: 'border-top-left-radius'},
                    { name: 'Right', property: 'border-top-right-radius'},
                    { name: 'Bottom', property: 'border-bottom-left-radius'},
                    { name: 'Left', property: 'border-bottom-right-radius'}
                  ],
                },{
                  property: 'box-shadow',
                  properties: [
                    { name: 'X position', property: 'box-shadow-h'},
                    { name: 'Y position', property: 'box-shadow-v'},
                    { name: 'Blur', property: 'box-shadow-blur'},
                    { name: 'Spread', property: 'box-shadow-spread'},
                    { name: 'Color', property: 'box-shadow-color'},
                    { name: 'Shadow type', property: 'box-shadow-type'}
                  ],
                },{
                  id: 'background-bg',
                  property: 'background',
                  type: 'bg',
                },],
              },{
                name: 'Extra',
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
                properties: [{
                  property: 'transition',
                  properties:[
                    { name: 'Property', property: 'transition-property'},
                    { name: 'Duration', property: 'transition-duration'},
                    { name: 'Easing', property: 'transition-timing-function'}
                  ],
                },{
                  property: 'transform',
                  properties:[
                    { name: 'Rotate X', property: 'transform-rotate-x'},
                    { name: 'Rotate Y', property: 'transform-rotate-y'},
                    { name: 'Rotate Z', property: 'transform-rotate-z'},
                    { name: 'Scale X', property: 'transform-scale-x'},
                    { name: 'Scale Y', property: 'transform-scale-y'},
                    { name: 'Scale Z', property: 'transform-scale-z'}
                  ],
                }]
              },{
                name: 'Flex',
                open: false,
                properties: [{
                  name: 'Flex Container',
                  property: 'display',
                  type: 'select',
                  defaults: 'block',
                  list: [
                    { value: 'block', name: 'Disable'},
                    { value: 'flex', name: 'Enable'}
                  ],
                },{
                  name: 'Flex Parent',
                  property: 'label-parent-flex',
                  type: 'integer',
                },{
                  name      : 'Direction',
                  property  : 'flex-direction',
                  type    : 'radio',
                  defaults  : 'row',
                  list    : [{
                            value   : 'row',
                            name    : 'Row',
                            className : 'icons-flex icon-dir-row',
                            title   : 'Row',
                          },{
                            value   : 'row-reverse',
                            name    : 'Row reverse',
                            className : 'icons-flex icon-dir-row-rev',
                            title   : 'Row reverse',
                          },{
                            value   : 'column',
                            name    : 'Column',
                            title   : 'Column',
                            className : 'icons-flex icon-dir-col',
                          },{
                            value   : 'column-reverse',
                            name    : 'Column reverse',
                            title   : 'Column reverse',
                            className : 'icons-flex icon-dir-col-rev',
                          }],
                },{
                  name      : 'Justify',
                  property  : 'justify-content',
                  type    : 'radio',
                  defaults  : 'flex-start',
                  list    : [{
                            value   : 'flex-start',
                            className : 'icons-flex icon-just-start',
                            title   : 'Start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-just-end',
                          },{
                            value   : 'space-between',
                            title    : 'Space between',
                            className : 'icons-flex icon-just-sp-bet',
                          },{
                            value   : 'space-around',
                            title    : 'Space around',
                            className : 'icons-flex icon-just-sp-ar',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-just-sp-cent',
                          }],
                },{
                  name      : 'Align',
                  property  : 'align-items',
                  type    : 'radio',
                  defaults  : 'center',
                  list    : [{
                            value   : 'flex-start',
                            title    : 'Start',
                            className : 'icons-flex icon-al-start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-al-end',
                          },{
                            value   : 'stretch',
                            title    : 'Stretch',
                            className : 'icons-flex icon-al-str',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-al-center',
                          }],
                },{
                  name: 'Flex Children',
                  property: 'label-parent-flex',
                  type: 'integer',
                },{
                  name:     'Order',
                  property:   'order',
                  type:     'integer',
                  defaults :  0,
                  min: 0
                },{
                  name    : 'Flex',
                  property  : 'flex',
                  type    : 'composite',
                  properties  : [{
                          name:     'Grow',
                          property:   'flex-grow',
                          type:     'integer',
                          defaults :  0,
                          min: 0
                        },{
                          name:     'Shrink',
                          property:   'flex-shrink',
                          type:     'integer',
                          defaults :  0,
                          min: 0
                        },{
                          name:     'Basis',
                          property:   'flex-basis',
                          type:     'integer',
                          units:    ['px','%',''],
                          unit: '',
                          defaults :  'auto',
                        }],
                },{
                  name      : 'Align',
                  property  : 'align-self',
                  type      : 'radio',
                  defaults  : 'auto',
                  list    : [{
                            value   : 'auto',
                            name    : 'Auto',
                          },{
                            value   : 'flex-start',
                            title    : 'Start',
                            className : 'icons-flex icon-al-start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-al-end',
                          },{
                            value   : 'stretch',
                            title    : 'Stretch',
                            className : 'icons-flex icon-al-str',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-al-center',
                          }],
                        }]
                      }
                    ],
                  }
                },
        blockManager: {
            appendTo: '#blocks',
            blocks: [                  
            ]
          }
      });
      
      editor.I18n.addMessages({
        en: {
          styleManager: {
            properties: {
              'background-repeat': 'Repeat',
              'background-position': 'Position',
              'background-attachment': 'Attachment',
              'background-size': 'Size',
            }
          },
        }
      });

      var pn = editor.Panels;
      var modal = editor.Modal;
      var cmdm = editor.Commands;
      cmdm.add('canvas-clear', function() {
        if(window.confirm('Areeee you sure to clean the canvas?')) {
          var comps = editor.DomComponents.clear();
          setTimeout(function(){ localStorage.clear()}, 0)
        }
      });
      cmdm.add('set-device-desktop', {
        run: function(ed) { ed.setDevice('Desktop') },
        stop: function() {},
      });
      cmdm.add('set-device-tablet', {
        run: function(ed) { ed.setDevice('Tablet') },
        stop: function() {},
      });
      cmdm.add('set-device-mobile', {
        run: function(ed) { ed.setDevice('Mobile portrait') },
        stop: function() {},
      });



      // Add info command
      var mdlClass = 'gjs-mdl-dialog-sm';
      var infoContainer = document.getElementById('info-panel');
      cmdm.add('open-info', function() {
        var mdlDialog = document.querySelector('.gjs-mdl-dialog');
        mdlDialog.className += ' ' + mdlClass;
        infoContainer.style.display = 'block';
        modal.setTitle('About this demo');
        modal.setContent(infoContainer);
        modal.open();
        modal.getModel().once('change:open', function() {
          mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
        })
      });
      pn.addButton('options', {
        id: 'open-info',
        className: 'fa fa-question-circle',
        command: function() { editor.runCommand('open-info') },
        attributes: {
          'title': 'About',
          'data-tooltip-pos': 'bottom',
        },
      });

      console.log("ASDASD", pn.getPanelsEl())


      // pn.addButton('options', {
      //   id: 'show-json',
      //   className: 'btn-show-json',
      //   label: 'Save Template',
      //   context: 'show-json',
      //   command(editor) {
      //     // editor.Modal.setTitle('Components JSON')
      //     //   .setContent(`<textarea style="width:100%; height: 250px;">
      //     //     ${JSON.stringify(editor.getComponents())}
      //     //   </textarea>`)
      //     //   .open();

      //       // alert("asdasdsad")
      //       alert("Template Saved!")
      //       console.log(JSON.stringify(editor.getComponents()))
      //   },
      // });

      pn.addButton('options', {
        id: 'export',
        className: 'fa fa-save',
        // label: 'Exp',
        command: 'export-template',
        context: 'export-template',
        command(editor) {
          // editor.Modal.setTitle('Components JSON')
          //   .setContent(`<textarea style="width:100%; height: 250px;">
          //     ${JSON.stringify(editor.getComponents())}
          //   </textarea>`)
          //   .open();

            // alert("asdasdsad")
            alert("Template Saved!")
            console.log(editor.getHtml())
        },
        attributes: {
          'title': 'Save Template',
          'data-tooltip-pos': 'bottom',
        },
      });





      // // Simple warn notifier
      // var origWarn = console.warn;
      // toastr.options = {
      //   closeButton: true,
      //   preventDuplicates: true,
      //   showDuration: 250,
      //   hideDuration: 150
      // };
      // console.warn = function (msg) {
      //   if (msg.indexOf('[undefined]') == -1) {
      //     toastr.warning(msg);
      //   }
      //   origWarn(msg);
      // };


      // Add and beautify tooltips
      [['sw-visibility', 'Show Borders'], ['preview', 'Preview'], ['fullscreen', 'Fullscreen'],
       ['export-template', 'Export'], ['undo', 'Undo'], ['redo', 'Redo'],
       ['gjs-open-import-webpage', 'Import'], ['canvas-clear', 'Clear canvas']]
      .forEach(function(item) {
        pn.getButton('options', item[0]).set('attributes', {title: item[1], 'data-tooltip-pos': 'bottom'});
      });
      [['open-sm', 'Style Manager'], ['open-layers', 'Layers'], ['open-blocks', 'Blocks']]
      .forEach(function(item) {
        pn.getButton('views', item[0]).set('attributes', {title: item[1], 'data-tooltip-pos': 'bottom'});
      });
      var titles = document.querySelectorAll('*[title]');

      for (var i = 0; i < titles.length; i++) {
        var el = titles[i];
        var title = el.getAttribute('title');
        title = title ? title.trim(): '';
        if(!title)
          break;
        el.setAttribute('data-tooltip', title);
        el.setAttribute('title', '');
      }

      // Show borders by default
      pn.getButton('options', 'sw-visibility').set('active', 1);


      // Store and load events
      editor.on('storage:load', function(e) { console.log('Loaded ', e) });
      editor.on('storage:store', function(e) { console.log('Stored ', e) });


      // Do stuff on load
      editor.on('load', function() {
        var $ = grapesjs.$;

        // Show logo with the version

        //TODO WTF DOES THIS SECTION HAVE TO DO WITH CSS ?? 
        var logoCont = document.querySelector('.gjs-logo-cont');
        // document.querySelector('.gjs-logo-version').innerHTML = 'v' + grapesjs.version;
        var logoPanel = document.querySelector('.gjs-pn-commands');
        logoPanel.appendChild(logoCont);


        // Load and show settings and style manager
        var openTmBtn = pn.getButton('views', 'open-tm');
        openTmBtn && openTmBtn.set('active', 1);
        var openSm = pn.getButton('views', 'open-sm');
        openSm && openSm.set('active', 1);

        // Add Settings Sector
        var traitsSector = $('<div className="gjs-sm-sector no-select">'+
          '<div className="gjs-sm-title"><span className="icon-settings fa fa-cog"></span> Settings</div>' +
          '<div className="gjs-sm-properties" style="display: none;"></div></div>');
        var traitsProps = traitsSector.find('.gjs-sm-properties');
        traitsProps.append($('.gjs-trt-traits'));
        $('.gjs-sm-sectors').before(traitsSector);
        traitsSector.find('.gjs-sm-title').on('click', function(){
          var traitStyle = traitsProps.get(0).style;
          var hidden = traitStyle.display == 'none';
          if (hidden) {
            traitStyle.display = 'block';
          } else {
            traitStyle.display = 'none';
          }
        });

        // Open block mana  ger
        var openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
        openBlocksBtn && openBlocksBtn.set('active', 1);

         var cssLink = document.createElement("link");

         console.log(cssLink, );

         cssLink.href = "/main.css";
         cssLink.rel = "stylesheet";
         cssLink.type = "text/css";
          document.querySelector('iframe').contentWindow.document.head.appendChild(cssLink);
          document.querySelector('iframe').setAttribute("scrolling", "yes");
          document.querySelector('iframe').classList.add("gjs-dashed")
         
        //   console.log(document.querySelector('iframe'))
        });
}

  render(){
    return (
      <div>
      <h1 onClick={this.props.history.goBack}>Back to Grape JS</h1>
      <div className="gjs-logo-cont"></div>
        <div id="gjs">

        <section className="about-us-area">
              <div className="about-us-banner" style={{backgroundImage:  `url(${aboutUsBgImage})` }} />
              <div className="about-history" align="center">
                <h2>Since 2009</h2>
                <div className="row">
                  <div className="column col-md-4">
                    <p>
                      <span className="amount">10, 000+</span>
                      <br />
                      <span className="type">NEW CARS BUILT</span>
                    </p>
                  </div>
                  <div className="column col-md-4">
                    <p>
                      <span className="amount">6,000+</span>
                      <br />
                      <span className="type">PRE-OWNED CARS SOLD</span>
                    </p>
                  </div>
                  <div className="column col-md-4">
                    <p>
                      <span className="amount">20,000+</span>
                      <br />
                      <span className="type">CARS SERVICED</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="our-story">
                <div className="row">
                  <div className="column col-md-4">
                    <h2>Our Story</h2>
                  </div>
                  <div className="column col-md-6">
                    <h5>New Venture</h5>
                    <p>
                    As a subsidiary that expanded from BW Automobiles in 2009, Venture Cars was established to meet the rise in demand for brand new cars. Aptly named Venture Cars, the company was set up with the sole focus on new Japanese mass-market cars.  The genesis for this new venture was the observable consumer trends in the car market towards Japanese cars and parallel importers (PI). 
                    </p>
                    <p>
                    At Venture Cars, we take pride in serving our customers to the best of our abilities and we have a solid track record. We believe in being transparent and we work hard to meet the strict guidelines that are set up by Singapore Vehicle Traders Association (SVTA).
                    </p>
                  </div>
                </div>
              </div>
            </section>


          </div>
          
        
        <div id="blocks"></div>
      </div>
    )
  }

}

export default GrapeJSAbout;