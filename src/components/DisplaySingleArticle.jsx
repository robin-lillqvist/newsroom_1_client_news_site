import React from 'react'
import { connect } from 'react-redux'
import { Button, Header, Icon, Image, Container } from 'semantic-ui-react'

const DisplaySingleArticle = props => {
  let articleDetails
  let premium_user = false
  let articlepremium = props.singleArticle.premium
  let article = props.singleArticle
  let premium_message = ''

  if (!premium_user && articlepremium == true) {
    article.content = article.content.substring(0, 200) + '...'
    premium_message = (<p id="premium_message"><a href="">This article requires a premium membership.</a></p>)
  }

  articleDetails = (
    <div id={`article-${article.id}`}>
      <Image size='medium' src={article.image} />
      <br />
      <Container key={article.id} align='center'>
        <Header as='h1' id='article-title'>
          {article.title}
        </Header>
        <Header as='h4' id='article-lead'>
          {article.lead}
        </Header>
        <p id='article-content'>{article.content}</p>
        {premium_message}
        <Button
          id='back-button'
          onClick={() => props.dispatch({ type: 'BACK_TO_ARTICLE_LIST' })}
          key={article.id}><Icon name='chevron left' />Back</Button>
      </Container>
    </div>
  )

  return <div id='single-article'>{articleDetails}</div>
}

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  }
}

export default connect(mapStateToProps)(DisplaySingleArticle)
