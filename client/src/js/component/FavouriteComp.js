var React=require('react');
var Fetchfav=require('./Fetchfav.js');
var FavouriteComp=React.createClass(
      {
        getInitialState: function() {
              return {j:[]};
 },

 handleDeleteMovie: function(imdbId){
   console.log("delete called");
     $.ajax({
           url: 'http://localhost:8080/movie/delete/'+imdbId,//delete a movie
           type: 'DELETE',
           cache: false,
           success: function(d) {
              this.setState({j:d});
             console.log("successfully deleted");
           }.bind(this),
           error: function(xhr, status, err) {
           console.error(this.props.url, status, err.toString());
           }.bind(this)
           });
 },
 handleupdate: function(imdbid,name){
   $.ajax({
         url: 'http://localhost:8080/movie/update/'+imdbid+"/"+name,//updating a particular movie by passing the id
         type: 'PUT',
         cache: false,
         success: function(d) {
                this.setState({j:d});
           console.log("success updated");
         }.bind(this),
         error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
         }.bind(this)
         });
 },
        componentDidMount:function(){

                          $.ajax({
                                url: 'http://localhost:8080/movie/get',//ajax call to get list of favourite movies
                                dataType: 'json',
                                type: 'GET',
                                cache: false,
                                success: function(d) {
                                  this.setState({j:d});
                                  console.log("success");

                                }.bind(this),
                                error: function(xhr, status, err) {
                                console.error(this.props.url, status, err.toString());
                                }.bind(this)
                                });

        },
         render:function(){

                                  return (
                                    <Fetchfav handleupdate={this.handleupdate} deleteHandler={this.handleDeleteMovie} data={this.state.j}>
                                    </Fetchfav>
                                  );

               }
             })

         module.exports=FavouriteComp;
