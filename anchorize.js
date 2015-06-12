;(function () {

    'use strict';

    function anchorize (url) {

        var parser = document.createElement('a');

        parser.href = url;

        return {
            protocol: parser.protocol,
            username: parser.username,
            password: parser.password,
            host: parser.host,
            port: parser.port,
            search: parser.search,
            hash: parser.hash
        };
    }

    if (window) {

        window.anchorize = anchorize;
    }

}());
