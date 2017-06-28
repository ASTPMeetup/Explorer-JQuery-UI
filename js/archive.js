(function() {
  'use strict';
  const Load_Button = $('#load-more');
  var jsonURL = 'https://credentials-api.generalassemb.ly/explorer/posts';

  $.ajax(jsonURL, {
    method: 'GET',
    success: function(res){
      let obj = JSON.parse(res);

      Load_Button.on('click', function(e) {
        e.preventDefault;
        $(this).attr('disabled', true);
        $(this).text('Exploring the Archive..');

        var articleBlock = obj.posts.splice(0,2);
        setTimeout(function(){
          loadArticles(articleBlock);
        }, 1000);
      });
    }
  });

  function loadArticles(articleBlock) {
    if(articleBlock.length) {
      articleBlock.forEach(function(post){
        let archive = `<article>
                          <i class='fa ${post.category}'></i>
                          <h2>From the Archive</h2>
                          <h1>${post.title}</h1>
                          <h3>${post.date}</h3>
                          <p>${post.blurb}</p>
                        </article>`;

        $(archive).insertBefore(Load_Button.parent());
      });
      Load_Button.removeAttr('disabled');
    }
    var loadButtonText = (articleBlock.length) ? 'Load More' : 'End Of Archive';
    Load_Button.text(loadButtonText);
  }
})();
