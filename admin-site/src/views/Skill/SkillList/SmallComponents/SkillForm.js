/**
 * Created by Asus on 5/4/2017.
 */
import React, {Component} from 'react'


class SkillForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.data.id,
            name: this.props.data.name,
            description: this.props.data.description,
        }

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    //onChange of input type
    onChangeInput(e){
        this.setState({[e.target.name]:e.target.value})
    }


    //onClickSave
    onClickSave = () => {

        var newUserInfo = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
        }

        this.props.updateUser(newUserInfo);
    };



    render(){
        return(
            <div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <strong>Skill Form</strong>
                        </div>
                        <div className="card-block">
                            <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                                <div className="form-group">
                                    <label>Skill's Name</label>
                                    <input value={this.state.name} name="name" className="form-control" placeholder="Skill's name" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Skill's Default Description</label>
                                    <textarea value={this.state.description} name="description" rows="4" className="form-control" placeholder="Skill's default description" onChange={this.onChangeInput}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillForm