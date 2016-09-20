var React=require('react');

var Movieposter=React.createClass(
      {
         render:function(){

                return(
                              <div className="col-md-4 col-lg-4 col-sm-4">
                                <img alt="Bootstrap Image Preview" src={this.props.src} />
                              </div>//displaying the image
                     )
          }
      })

module.exports=Movieposter;
