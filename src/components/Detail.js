import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="datail">
        {this.props.data.category ? (
          <div>
            <h1>{`Item in Category: (${
              this.props.data.category.short_name
            })`}</h1>
            <table className="table">
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
              {this.props.data.menu_items.map((ele, index) => {
                return (
                  <tr>
                    <td>{ele.name}</td>
                    <td>{ele.description}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Detail;
