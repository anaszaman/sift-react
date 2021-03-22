function Sift(props) {
  var _user_id = props.userId;
  var _session_id = props.sessionId;

  var _sift = window._sift = window._sift || [];
  _sift.push(['_setAccount', props.beaconKey]);
  _sift.push(['_setUserId', _user_id]);
  _sift.push(['_setSessionId', _session_id]);
  _sift.push(['_trackPageview']);

  (function () {
    function ls() {
      var e = document.createElement('script');
      e.src = 'https://cdn.sift.com/s.js';
      document.body.appendChild(e);
    }
    if (window.attachEvent) {
      window.attachEvent('onload', ls);
    } else {
      window.addEventListener('load', ls, false);
    }
  })();
  return true
}

module.exports = Sift