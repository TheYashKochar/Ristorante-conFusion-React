
import React from 'react';
import { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Row, Col, Label, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      name: '',
      rating:'',
      comm:'',
    });
  }

  handleComment(values) {
    this.toggleModal();
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
  }

  // validateComment(name){
  //   const errors= { name: ''};

  //   if (this.state.touched.firstname && firstname.length <3){
  //           errors.name ="Firstname should have more than 3 characters";
  //       }
  //       else if (this.state.touched.firstname && firstname.length >10){
  //           errors.name ="Firstname should have less than 10 characters";
  //       }
  // }

  render(){
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil" /> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleComment(values)}>
              <Row className="form-group">
                <Col md={{size: 10, offset: 1}}>
                  <Label htmlFor="rating" >Rating</Label>
                  <Control.select model=".rating" name="rating"
                      className="form-control" >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size: 10, offset:1}}>
                  <Label htmlFor="name" >Your Name</Label>
                  <Control.text model=".name" id="name" name="name"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                          required, minLength: minLength(3), maxLength: maxLength(15)
                      }}
                       />
                  <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                          required: 'Required',
                          minLength: 'Must be greater than 2 characters',
                          maxLength: 'Must be 15 characters or less'
                      }}
                   />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size: 10, offset:1}}>
                  <Label htmlFor="message" >Comment</Label>
                    <Control.textarea model=".comm" id="comm" name="comm"
                        rows="6"
                        className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:10, offset: 1}}>
                    <Button type="submit" color="primary">
                    Submit
                    </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>);
  }
}

function RenderDish({dish})  {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

  function RenderComments({comments}){
      if (comments != null){
        const comm = comments.map((c) => { 
                    return ( 
                      <div className="pb-4">
                      <div className="pb-2"> {c.comment} </div>
                      <div> -- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))} </div>
                      </div>
                    );
                  });
        return(
          <div>
            <h1> Comments </h1>
            {comm}
          </div>
        );
      }
      else
        return ( <div> </div>);
    }

    const  Dishdetail = (props) => { 
    	return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <div className="mt-2">
                          <CommentForm />
                          
                        </div>
                    </div>
                </div>

                </div>
            );
    }

export default Dishdetail;