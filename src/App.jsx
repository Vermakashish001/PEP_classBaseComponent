import React, { Component } from "react";

export default class First extends Component {
	constructor() {
		super();
		this.state = {
			name: "Kashish Verma",
			hide: false,
			btnText: "Hide",
		};
		this.handleCLick = this.handleCLick.bind(this);
	}

	handleCLick() {
		if (this.state.hide === false)
			this.setState({ hide: true, btnText: "Show" });
		else this.setState({ hide: false, btnText: "Hide" });
	}

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					backgroundColor: "grey",
				}}
			>
				<h1
					hidden={this.state.hide}
					style={{
						color: "white",
						backgroundColor: "black",
						padding: "5px",
						borderRadius: "5px",
						fontSize: "50px",
					}}
				>
					{this.state.name}
				</h1>
				<button
					onClick={this.handleCLick}
					style={{
						padding: "10px",
						borderRadius: "10px",
						fontSize: "20px",
						cursor: "pointer",
					}}
				>
					{this.state.btnText}
				</button>
			</div>
		);
	}
}

