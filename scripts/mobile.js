$('body').append(`
<div data-nosnippet id="tooSmall" style="display: none">
	<center>
		<h1>Reper2niverse</h1>
		<img src="assets/icon.gif" width="12%" style="border-radius: 50%">

		<p>
			For people interested in coding and gaming.<br>
			Here you can be notified on Reper2's<br>
			new software releases and updates.
		</p>

		<button type="button">
			<a target="_blank" href="https://discord.gg/aaVjjZtQts">&nbsp;&nbsp;Join Reper2niverse&nbsp;&nbsp;</a>
		</button>

		<br><br>

		<button type="button">
			<a target="_blank" href="https://discord.new/KUHBFybPyV36">Create new server from template</a>
		</button>

		<br><br>

		<iframe src="https://discord.com/widget?id=771861170256085023&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
	</center>
</div>
`)


$(window).resize(function () {
	if (window.innerHeight > window.innerWidth - 75) { 
		$('#everything').hide(); 
		$('#tooSmall').show();
	}

	else { 
		$('#everything').show(); 
		$('#tooSmall').hide() 
	}
});

$(document).ready(function() {
	$(window).trigger('resize');
});