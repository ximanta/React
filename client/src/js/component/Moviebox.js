var React=require('react');
var Searchbar=require('./Searchbar.js');
var Movielist=require('./Movielist.js');
var Moviebox=React.createClass(
      {
        getInitialState: function() {
              return {data: [],jsonData:[]};
 },
        getDefaultProps:function(){
          return{url:'http://www.omdbapi.com/?s='};
        },
        searchIt:function(arg1){
          $.ajax({
        url: this.props.url+arg1,
        dataType: 'json',
        type: 'GET',
        success: function(data) {
          console.log(data);
          this.setState({data: data});
          this.setState({jsonData:data.Search});
          console.log(this.state.jsonData);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
        },
         render:function(){

                return(<div>
                              <Searchbar searchIt={this.searchIt} data={this.data}></Searchbar>
                                <Movielist jsonData={this.state.jsonData}></Movielist>
                     </div>)
          }
      })

module.exports=Moviebox;
