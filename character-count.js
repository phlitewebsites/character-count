(function($){

  $.fn.charcount = function(options) {

    var $this = this;

    var opts = $.extend({
      labelClass : 'charcount',
      labelStyle : 'float:right',
    }, options );

    function charcount() {

      $this.each(function() {

        var $elem      = $(this);
        var $label     = $elem.siblings('label');
        var $labelSpan = $label.find('.'+opts.labelClass);
        var iLimit     = $elem.data('charcount');
        var iUsed      = $elem.val().length;

        if ( iUsed > iLimit) {
          $elem.val( $elem.val().substring(0, iLimit) );
          iUsed = iLimit;
        }

        if ($labelSpan.length === 0) {
          $label
            .append('<span class="' + opts.labelClass + '" style="' +
                opts.labelStyle + '">' + iUsed + ' / ' + iLimit + '</span>');
        }

        else {
          $labelSpan.text( iUsed + ' / ' + iLimit);
        }

      });

    }

    charcount();

    this.on('keyup focus blur', charcount);

    return this;

  };

})(jQuery);