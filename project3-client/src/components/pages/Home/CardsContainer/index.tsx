import * as React from "react";

export default class CardContainer extends React.Component<any, any> {
  public render() {
    const { data } = this.props;
    return (
      <div className="cardsContainer">
        {data.map((node: any) => (
          <this.props.childComponent
            key={node.id}
            data={node}
          />
        ))}
      </div>
    );
  }
}
