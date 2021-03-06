import React, { Component } from "react";
import api from "Api";

import Image from 'Components/Image'

class Interior extends Component {


  _RenderProductVariant = () => {
    return (
      Object.keys(this.props.Interior).map((ee, indexes) => {

        if(this.props.Interior[ee].objects.length > 0) {
          return (
            <div key={indexes} style={{display:'flex', flexDirection:'row'}}>
  
              <span>{ee}</span>
  
              {this.props.Interior[ee].objects.map((e, index) => {
                console.log(e.id)
                return (                     
                    <div key={e.id} style={{display: 'flex', flexDirection:'row', overflow:'auto'}}>
                        <div onClick={() => console.log(e)} style={{display: 'flex', flexDirection:'column', border : '1px solid black', borderStyle : 'dashed', margin: 10}}>
                            <span>name: {e.name}</span>
                            <span>price: {event.price}</span>
                            <span>{e.isDefault}</span>
                            {e.files.length > 0 && 
                                
                                <Image
                                  imageSource={e.files}
                                  single={true}
                                />
                            } 
                        </div>
                    </div>
                      
                  )
              })}
            </div>
          )
        } else {
          return null
        }
        
      })
    )
  }

  render() {
    
    return (
      <div className="todo-dashboard" style={{border : '1px solid black', borderStyle : 'dashed', marginTop: 50, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        
            <span>Show Interior Product Variant</span>
            
            <div style={{width: 300}}>
              {this._RenderProductVariant()}
            </div>

        </div>
    );
  }
}

export default Interior;



