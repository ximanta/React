var React=require('react');

var Modal=React.createClass(
      {
        getInitialState: function() {
                      return {value:this.props.title};
       },
        changevalue:function(e){

                  this.setState({value:e.target.value});
        },

        update:function(){
                            this.props.handleupdate(this.props.imdbId,this.state.value);

        },
        render:function(){
               return(
                 <div id="myModal" className="modal fade" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 className="modal-title">Update Movie</h4>
                    </div>
                    <div className="modal-body">
                    <form className="form-horizontal">
                      <div className="form-group" >
                        <label className="col-lg-4 control-label" for="inputName">Movie Name</label>
                        <div className="col-lg-8">
                          <input className="form-control" id="inputName" placeholder={this.state.value} onChange={this.changevalue} type="text"/>
                        </div>
                      </div>
                    </form>

                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.update}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              )}
                })

module.exports=Modal;
