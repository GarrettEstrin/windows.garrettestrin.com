var FirstComponent = React.createClass({
render: function(){
    return (
    <div className="icon-container">
        <div className="icon">
            <div className="text">Story <br/>Time</div>
        </div>
    </div>
    )
}
});

ReactDOM.render(
<FirstComponent />,
document.getElementById('app1')
)