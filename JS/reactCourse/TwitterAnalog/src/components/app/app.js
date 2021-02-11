import React,{Component} from 'react';
import AppHeader  from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostAddForm from '../postAddForm/';
import PostList from '../postList/';
import jsonData from '../data/data.json';



export default class App extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            data : [],
            term: '',
            filter: 'all'
        }

        this.maxId = 3;
    }


    componentDidMount(){

        console.log(__dirname);

        this.setState(({data}) => {
            const newArrCreation = () => JSON.parse(JSON.stringify(jsonData));

            const newArr = newArrCreation();

            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {

        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            //Order of before and after is essential, because else it will delete unnecessary items
            const after = data.splice(index+1,data.length);
            const before = data.splice(0,index);


            const newArr = [...before, ...after];

            return {
                data: newArr
            };
        });
    }

    addItem = (body) => {

        const newItem = {
            label: body,
            important: false,
            id: `lol${this.maxId++}`
        }

        let url = '/data.json';
        fetch(url, {
            method:'POST',
            body:JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res)).then((myJson) => {console.log('Success', myJson);}).catch(error => console.error('Error',error)) ;

        this.setState(({data}) => {

            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    likeItem = (id) => {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, liked: !oldItem.liked}

            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }

        });
    }


    importantItem = (id) => {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important}

            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }

        });
    }

    searchPost = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost = (items,filter) => {
        if(filter === 'liked'){
            return items.filter((item) => item.liked);
        } else {
            return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render(){

        const {data,term,filter} = this.state;

        const entries = data.length;
        const liked = data.filter(item => item.liked).length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app grid">
                <div className="u-6-24">
                    <AppHeader 
                        entries={entries}
                        liked={liked}    
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <div className="u-12-24">
                    <PostAddForm
                        onAdd={this.addItem}
                    />
                    <PostList 
                        posts={visiblePosts}
                        onDelete={this.deleteItem}
                        onLike={this.likeItem}
                        onImportant={this.importantItem}
                    />
                </div>  
                <div className="u-6-24 search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                </div> 
            </div>
        )
    }
}
