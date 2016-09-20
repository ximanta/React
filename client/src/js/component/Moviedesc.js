var React=require('react');

var Moviedesc=React.createClass(
      {
         render:function(){

                return(<div className="col-md-8 col-lg-8 col-sm-8">
                            <div className="panel-group" id="panel-652836">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                   <a className="panel-title" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-133781">Title</a>
                                </div>
                                <div id="panel-element-133781" className="panel-collapse collapse in">
                                  <div className="panel-body">
                                    {this.props.title}
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                   <a className="panel-title collapsed" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-255869">Year</a>
                                </div>
                                <div id="panel-element-133781" className="panel-collapse collapse in">
                                  <div className="panel-body">
                                    {this.props.y}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading">

                                 <a className="panel-title collapsed" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-255869">Imdb ID</a>
                              </div>
                              <div id="panel-element-133781" className="panel-collapse collapse in">
                                <div className="panel-body">
                                  {this.props.imdbId}
                                </div>
                              </div>
                            </div>
                          </div>);
          }
      })

module.exports=Moviedesc;
