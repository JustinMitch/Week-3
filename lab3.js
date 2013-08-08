  		
		// updated with some real text
		// "hungry - Eat at joes <img src='image.png' />"
		var ad_metadata = {
			'ad0' : "advertise here",
			'ad1' : "ad test number 2",
			'ad2' : "ad test number 3",
			'ad3' : "ad test number 4",
			'ad4' : "ad test number 4",
			
		};
		
				
		rand_ad_display();
		
		function rand_ad_display() {
		
			var ad_div = document.getElementById("ad");			
			var ad_keys = [];		
			var ad_key = "";
			
		
			for ( ad_key in ad_metadata ) {
				ad_keys.push(ad_key);
			}
			
			var ad_keys_len = ad_keys.length;			
			var rand_ad_key = getRandAdKey(ad_keys_len);
			var ad_key_value = ad_keys[rand_ad_key];		
			var ad_metadata_value = ad_metadata[ad_key_value];		
		
			ad_div.innerHTML = ad_metadata_value;
			
			//replaces the title with matching string values from ad_metadata_value
			
			
			document.title=(ad_metadata_value.substr(0,15));
			
				
		}
		
		
		
		function getRandAdKey( len ) {
			// gets random number, 0 to len(passed in)
			return Math.floor( Math.random()* len);		
		}
		
	
