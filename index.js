/**
 * 
 * Fonction qui permet d'ajouter du style dans les pages.
 * Lorsqu'on clique sur une carte elle recoit une css qui lui donne un effet
 * d'ombrage.
 */
$(".carte").click(function(){
    $(".carte").css('box-shadow', '');
    $(this).css('box-shadow', '5px 0px 15px 0px #000000');
 
});

/*--------------------MENU ACCORDEON--------------------*/

$(function(){
    $("#menuAccordeon").accordion({active: 0,
        animate: {
          duration: 2000,
          down: {
            easing: "easeOutBounce",
            duration: 2000,
          },
        },
        collapsible: true,
        header: "h2",
        heightStyle: "content", 
        icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" }
    });
})

/*--------------------GALLERIE--------------------*/

/* Appel la fonction gallerie des que la page load. */ 
$(document).ready(function() {gallerie();});

function gallerie(){
  $(function(){

    /* Mettre la première image en gros et entourer la miniature d'une bordure. */
    $('.mini').css('border', '#05386b solid 5px');
    $('#grande-img').attr('src', $('.imageEmployee img:first').attr('src'));
    $('.imageEmployee img:first').css('border', '#5cdb95 solid 5px');

    /* Fonction qui s'active lorsqu'on click sur la miniature. */
    $('.mini').click(function () {
      /* Remettre les autres miniatures à un fond blanc. */
      $('.imageEmployee .mini').css('border', '#05386b solid 5px');

      /* Affecter l'image cliquée d'une bordure verte. */
      $(this).css('border', '#5cdb95 solid 5px');

      /* Prend le nom de l'attribut src de l'élément sélectionné. */
      var nomSource = $(this).attr('src');

      /* Prend le nom de l'attribut id de l'élément sélectionné. */
      var idEmployee = $(this).attr('id');

      /* Efface le paragraphe de l'employee précédent. */
      $('#paragrapheEmployee').empty();

      /* Vérifie quel text afficher selon l'id de l'employee. */
      if(idEmployee === "president"){
        $('#paragrapheEmployee').append("<h3>William Stancu</h3><p>Notre président de la compagnie se démarque par son leadership et sa confiance au sein de la compagnie ! Il est diplômé d'une technique de l'informatique au Cegep Montmorency et d'un BAC en genie informatique à l'ETS.</p>");
      }else if(idEmployee === "programmeurS"){
        $('#paragrapheEmployee').append("<h3>Marc Bergeron</h3><p>Notre programmeur senior de la compagnie se démarque par son autonomie et sa logique. En effet, peut importe le bug reporté dans nos jeux il trouve toujours un moyen de la fixé.</p>");
      }else if(idEmployee === "designerS"){
        $('#paragrapheEmployee').append("<h3>Marco Gonzalez</h3><p>Notre designer senior de la compagnie se démarque par sa créativité et son savoir-faire. Marco a permis a notre compagnie de se démarquer au niveau des graphiques de nos jeux et du design au global.</p>");
      }else if(idEmployee === "directeurA"){
        $('#paragrapheEmployee').append("<h3>Tyron Boucher</h3><p>Notre directeur audio s'occupe de tous les sons et ambiances dans nos jeux. Il c'est démarquer dans la réalité des sons qu'il amène a nos jeux. Il à même engager un bruiteur pour simuler des bruit particulier.</p>");
      }else if(idEmployee === "artisteS"){
        $('#paragrapheEmployee').append("<h3>Marie Courtier</h3><p>Notre artiste senior se démarque par son talent du dessin. C'est elle qui s'occupe des première couverture de nos jeux et des menus de jeu.</p>");
      }else if(idEmployee === "directriceA"){
        $('#paragrapheEmployee').append("<h3>France Trépanier</h3><p>Notre directrice des animations se démarque par son originalité face aux autres. Elle s'occupe des animations des publicités de nos jeux et des cinématiques dans nos jeux.</p>");
      }

      /* Petite animation d'opacité de la grande image. */
      $('#grande-img').fadeOut(2000, function () {

        /* Attribuer la source de la miniature à la grande image. */
        $('#grande-img').attr('src', nomSource);
        $('#grande-img').fadeIn(2000);
      });
    });
  });
}

/*--------------------FORMULAIRE NOUS CONTACTER--------------------*/

/*-----Bouton envoyer-----*/
/**
 * Fonction qui permet au bouton envoyer de faire son animation.
 */
$(function() {
  $( "#boutonEnvoyer" ).click(function() {
    /* Ajoute la classe onclic lorsqu'on clique sur le boutonEnvoyer. */
    $( "#boutonEnvoyer" ).addClass( "onclic", 250, valider);
  });

  /**
   * Fonction qui permet de se faire appeller lorsqu"on clique sur
   * le boutonEnvoyer pour activer l'animation. 
   */
  function valider() {
    setTimeout(function() {
      $( "#boutonEnvoyer" ).removeClass( "onclic" );
      /* Ajoute la classe valider après avoir enlever la classe onclic. */
      $( "#boutonEnvoyer" ).addClass( "valider", 450, callback );
    }, 2250 );
  }
  /**
   * Fonction qui enleve la classe valider avec un timeout.
   */
    function callback() {
      setTimeout(function() {
        $( "#boutonEnvoyer" ).removeClass( "valider" );
      }, 1250 );
    }
  });

/*-----Bouton effacer-----*/

/**
 * Fonction qui permet de supprimer tous les champs du formulaire.
 */
$(function(){
  $(".boutonCouleur").click(function(){
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    $('input[name=genre]').attr('checked',false);
    document.getElementById('email').value = '';
    $('#pays').val('default');
    $('input[id=infoLettres]').attr('checked',false);
    document.getElementById('question').value = '';
    
  });
});