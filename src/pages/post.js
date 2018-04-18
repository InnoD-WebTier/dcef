import React from 'react'
// import Link from 'gatsby-link'
import '../css/bootstrap.css'
import '../css/post.scss'
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';

class PostPage extends React.Component {
	render() {
		return (
			<div>
				<Button bsStyle="link">Back to News and Events</Button>
			    <PageHeader>
			    	<h1 className="article_title">Article Title Here</h1>
			    	<br></br>
			    	<small>February 15, 2018</small>
			    </PageHeader>
				<Panel>
				    <Panel.Body>
				    	article content Here
				    	Lorem ipsum dolor sit amet, et pro purto putant, nam sonet suscipit ea. Te iuvaret dissentias ius, te facer eripuit nam. At choro meliore dissentiet vim. Eu vix reprimique liberavisse.

						Quem equidem habemus per an. Ad tale mandamus molestiae usu, ut assum laoreet splendide eam. Mundi habemus suscipiantur eu usu, mel dicit vulputate ex. Qui atomorum definitionem ne, ex vero eripuit denique vel.

						Eirmod adversarium vis ex, deleniti perpetua signiferumque sit ad. Ad sed menandri erroribus forensibus, ex quas viris ornatus vis, ei odio minimum consetetur has. In eius adipiscing nam, inani commune expetendis ad vim, enim partem deserunt ea pri. An vix vidisse liberavisse, aliquip aliquid erroribus mei at, no senserit elaboraret mel. Esse ponderum definitiones ne his.

						Ne usu nulla homero persius. Pri eu quis aliquam, eius debet debitis ei cum. Sea ea autem recteque. Ut per tale blandit explicari. Vel no sensibus gubergren, no sea quot invidunt oporteat, mel dico offendit sententiae no.

						Vel ne autem simul reformidans. Eum ne homero percipitur. An usu mollis consequat interpretaris, quo aliquip dolorem et. Dicat semper duo ei, in unum facete salutandi eam, ut choro mucius nostro usu. Qui in choro dissentiet, denique sapientem vituperatoribus cu vel.
				    </Panel.Body>
				</Panel>
			</div>
		);
	}
}

export default PostPage