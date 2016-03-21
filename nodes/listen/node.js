output = function(cb) {

  cb( { stream: $.get('stream') } );

  $.stream.on('data', function(val) {
    cb({ out: $.create(val) });
  });

  $.stream.on('error', function(err) {
    cb({ error: $.create(err) });
  });
};
