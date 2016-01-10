const React         = require('react');
const ReactDOM      = require('react-dom');
const DocumentTitle = require('react-document-title');
const info          = require('./info.json');
const TitleBar      = require('./TitleBar');
const Image    = require('./Image');

var Page = React.createClass({
  render: function () {
    const titleTxt = info.id.split('/').slice(1).join(' / ');
    var site;
    if (info.site == '') {
      site = (<div style={{color:'grey', IeUserSelect:'none', WebkitUserSelect:'none', MozUserSelect:'none', cursor:'default'}} title='no website info available'><span className="octicon octicon-link" /> website</div>);
    }
    else {
      site = (<a href={info.site} target='_blank'><span className="octicon octicon-link" /> website</a>);
    }
    const repo = info.repo != '' ? (<a href={info.repo} target='_blank'><span className="octicon octicon-repo" /> repo</a>) : null;
    return (
      <DocumentTitle title={titleTxt}><div>
        <TitleBar>
          <div style={{
              color: 'white'
              , width: '100%'
              , textAlign: 'center'
              , verticalAlign: ' middle'
              , lineHeight: '60px'
              , fontSize: 24
              , borderRadius: '5px'
             }}
          >
            {titleTxt}
          </div>
        </TitleBar>
          <div style={{padding: 20, marginTop:10}}>
            <div style= {{
                display: 'flex'
                , flexFlow: 'row wrap'
                , justifyContent: 'space-around'
            }}
            >
              <div style={{marginBottom:10}}>{info.description}</div>
              <div>{site}</div>
              <div>{repo}</div>
            </div>
          </div>
        <div style={{
          backgroundColor:'#373737'
          , borderRadius: '1em'
        }}
        >
        <img
          src='images/top.svg'
          style = {{
            width: '30%'
          }}
        />
        <img
          src='images/bottom.svg'
          style = {{
            width: '30%'
          }}
        />
        </div>
      </div></DocumentTitle>
    );
  },
});

module.exports = Page
