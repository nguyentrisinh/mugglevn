/**
 * Created by Asus on 5/7/2017.
 */
import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';


class ReviewForm extends Component {
    constructor(props){
        super(props);

        var stringLikedUser = "";
        var i = 0;
        for (; i < props.data.liked_users.length - 1; i++){
            stringLikedUser = stringLikedUser.concat(props.data.liked_users[i] + '\n');
        }
        stringLikedUser = stringLikedUser.concat(props.data.liked_users[i]);

        var stringDislikedUser = "";
        i = 0;
        for (; i < props.data.disliked_users.length - 1; i++){
            stringDislikedUser = stringDislikedUser.concat(props.data.disliked_users[i] + '\n');
        }
        stringDislikedUser = stringDislikedUser.concat(props.data.disliked_users[i]);

        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            author: this.props.data.author,
            what_user_like: this.props.data.what_user_like,
            what_user_dislike: this.props.data.what_user_dislike,
            company: this.props.data.company,
            rating: this.props.data.rating,
            liked_users: stringLikedUser,
            disliked_users: stringDislikedUser,
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        // this.onSelectChangeHandle = this.onSelectChangeHandle.bind(this);
        this.onCompanySelectChange = this.onCompanySelectChange.bind(this);
        this.onAuthorSelectChange = this.onAuthorSelectChange.bind(this);
    }

    //onChange of input type
    onChangeInput(e){
        this.setState({[e.target.name]:e.target.value})
    }

    //onClickSave
    onClickSave = () => {

        if (this.state.title === ""){
            alert("Please type review's title");
            return;
        }

        var i = 0;

        var lines = this.state.liked_users.split('\n');
        var stringLikedUserJSON = '[';

        for(;i < lines.length - 1;i++){
            stringLikedUserJSON = stringLikedUserJSON.concat('"' + lines[i] + '",');
        }
        stringLikedUserJSON = stringLikedUserJSON.concat('"' + lines[i] + '"');
        stringLikedUserJSON = stringLikedUserJSON.concat(']');

        i = 0;

        lines = this.state.disliked_users.split('\n');
        var stringDislikedUserJSON = '[';

        for(;i < lines.length - 1;i++){
            stringDislikedUserJSON = stringDislikedUserJSON.concat('"' + lines[i] + '",');
        }
        stringDislikedUserJSON = stringDislikedUserJSON.concat('"' + lines[i] + '"');
        stringDislikedUserJSON = stringDislikedUserJSON.concat(']');

        var newReivewInfo = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            what_user_like: this.state.what_user_like,
            what_user_dislike: this.state.what_user_dislike,
            company: this.state.company,
            rating: this.state.rating,
            liked_users: JSON.parse(stringLikedUserJSON),
            disliked_users: JSON.parse(stringDislikedUserJSON),
        }

        this.props.updateReview(newReivewInfo);

    };

    // //onSelectChange
    // onSelectChangeHandle(e){
    //     this.setState({[e.target.name]: e.target.value});
    // }

    onCompanySelectChange(val){
        this.setState({company: val.value});
    }

    onAuthorSelectChange(val){
        this.setState({author: val.value});
    }

    render(){

        // var companyOptionRender = this.props.all_company_data.company.map((company) => {
        //     return (
        //         <option value={company.name} key={company.id}>{company.name}</option>
        //     )
        // });

        return(
            <div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <strong>Reivew Form</strong>
                        </div>
                        <div className="card-block">
                            <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                                <div className="form-group">
                                    <label>Review's Title</label>
                                    <input
                                        value={this.state.title}
                                        name="title"
                                        type="text"
                                        className="form-control"
                                        placeholder="Reivew's title"
                                        onChange={this.onChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Reivew's Author</label>
                                            <Select
                                                name="author"
                                                value={this.state.author}
                                                options={this.props.all_user_data.user}
                                                onChange={this.onAuthorSelectChange}
                                            />
                                            {/*<input value={this.state.author} name="author" className="form-control" placeholder="Review's author" onChange={this.onChangeInput}/>*/}
                                        </div>
                                        <div className="col-md-6">
                                            <label>Rating</label>
                                            <input max="5" min="0" type="number" value={this.state.rating} name="rating" className="form-control" placeholder="Rating" onChange={this.onChangeInput}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>What User Like</label>
                                    <textarea value={this.state.what_user_like} name="what_user_like" rows="9" className="form-control" placeholder="What user like" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group">
                                    <label>What User Dislike</label>
                                    <textarea value={this.state.what_user_dislike} name="what_user_dislike" rows="9" className="form-control" placeholder="What user dislike" onChange={this.onChangeInput}/>
                                </div>


                                {/*<div className="form-group">*/}
                                {/*<label>Company</label>*/}
                                {/*<select value={this.state.company} name="company" className="form-control" onChange={this.onSelectChangeHandle}>*/}
                                {/*<option value="">Please choose Company name </option>*/}
                                {/*{companyOptionRender}*/}
                                {/*</select>*/}
                                {/*</div>*/}

                                <div className="form-group">
                                    <label>Company</label>
                                    <Select
                                        name="company_select"
                                        value={this.state.company}
                                        options={this.props.all_company_data.company}
                                        onChange={this.onCompanySelectChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Liked User</label>
                                    <textarea value={this.state.liked_users} name="liked_users" rows="9" className="form-control" placeholder="What user like" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Disliked User</label>
                                    <textarea value={this.state.disliked_users} name="disliked_users" rows="9" className="form-control" placeholder="What user dislike" onChange={this.onChangeInput}/>
                                </div>
                            </form>
                            {/*<div className="card-footer">*/}
                                {/*<button type="submit" className="btn btn-sm btn-primary" onClick={this.onClickSave} ><i className="fa fa-dot-circle-o"></i> Submit</button>*/}
                                {/*<button type="reset" className="btn btn-sm btn-danger" onClick={this.onClickReset}><i className="fa fa-ban"></i> Reset</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (ReviewForm)