import React,{Component} from 'react'; 

export default class PostListItem extends Component {

    render() {
        const {label, deletePost, likePost, importantPost} = this.props;
        const {important, liked} = this.props; 
        let classNames = 'appListItem d-flex justify-content-between'
        if (important){
            classNames += ' important'; 
        } 
        if (liked){
            classNames +=' liked';
        }
        return(
            <div className={classNames}>
            <span className="appListItemLabel"
            onClick={likePost}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-item-center">
                <button
                type="button"
                className="btnStar btnSm"
                onClick={importantPost}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                type="button"
                className="btnTrash btnSm"
                onClick={deletePost}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}