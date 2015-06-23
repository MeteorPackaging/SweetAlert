Package.describe({
    name: 'kevohagan:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '1.0.0',
    git: 'https://github.com/kevohagan/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'upstream/dist/sweet-alert.css',
        'upstream/dist/sweet-alert.min.js'
    ], ['client']);

    if(api.export){

    }
});
