
         var React=require('react');
         var Favmovie=require('./Favmovie.js');
         var Fetchfav=React.createClass(
               {

                  render:function(){
                                     console.log("fav console" +JSON.stringify(this.props.data));
                             var movieNodes = this.props.data.map(function(movie) {

                                           return (
                                             <Favmovie handleupdate={this.props.handleupdate} delete={this.props.deleteHandler} m={movie} title={movie.moviename} key={movie.imdbid} imdbId={movie.imdbid} y={movie.year} src={movie.source}>
                                             </Favmovie>
                                           );
                                         }.bind(this));

                                      return(
                                      <div>
                                      {movieNodes}
                                       </div>)
                            }
                        })

                  module.exports=Fetchfav;
