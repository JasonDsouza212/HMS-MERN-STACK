import axios from "axios";
import React from "react";
import { Col, Row, Table } from "reactstrap";
import Cookies from "js-cookie";
class GetFeedBack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedbacks: [],
		};
	}
	componentDidMount() {
		const headers = {
			authorization: Cookies.get("token"),
		};
		axios
			.get("http://localhost:4000/feedback/feedbackList", { headers: headers })
			.then((res) => {
				this.setState({ feedbacks: res.data });
			});
	}
	render() {
		console.log(this.state);
		return (
			<div>
				<Row>
					<Col sm="3"></Col>

					<Table
						striped
						style={{
							width: "50%",
							"box-shadow": "2px 2px 4px 4px #CCCCCC",
							marginTop: "30px",
						}}
					>
						<thead>
							<th>Id</th>
							<th>Feedback</th>
						</thead>

						{this.state.feedbacks.map((feedback) => {
							return (
								<tr>
									<td>{feedback.feedback_id}</td>
									<td>{feedback.feedback}</td>
								</tr>
							);
						})}
					</Table>
				</Row>
			</div>
		);
	}
}
export default GetFeedBack;
