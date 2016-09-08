import React from 'react';

class Ref_Parent extends React.Component {
  render() {
    return (
      <div>
        <Ref_Child ref="check"/>
      </div>
    );
  }
}

class Ref_Child extends React.Component {
  vinoth()
  {
    alert("KKKKKKKKK")
  }
  render() {
    return (
      <div>
        <h2>14.Accessing child Component method from parent using REF object in refkeywordfile.jsx</h2>
        <button onClick = {() => this.vinoth()}>childreference</button>
      </div>
    );
  }
}
export default Ref_Parent;
