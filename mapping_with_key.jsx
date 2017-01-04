import React from 'react';

class Mapping extends React.Component {
   constructor() {
      super();

      this.detail = {
         data:
         [
            {
               component: 'First...',
               id: 1
            },

            {
               component: 'Second...',
               id: 2
            },

            {
               component: 'Third...',
               id: 3
            }

         ]
      }

   }

   render() {
      return (
         <div>
            <h2>15.Import mapping concept from mapping_with_key.jsx file</h2>
            <div>

               {this.detail.data.map((dynamicComponent,i) => <Content
                  key={i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}

export default Mapping;
