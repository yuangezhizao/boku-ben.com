

	$(function(){
		

		$('input[type="checkbox"]').change(function(event) {
			var check = 0;
			
			if($(this).prop("checked")){
				$(this).parents("li").addClass("checked");
			}else{
				$(this).parents("li").removeClass("checked");
			}
			


			$('input[type="checkbox"]').each(function(){
				if($(this).prop('checked')){
					check++;
				}

			})

			if(check >= 5){
				$('input[type="checkbox"]').each(function(){
					if(!$(this).prop('checked')){
						$(this).attr("disabled",true);
						$(this).parents("li").addClass("disabled");
					}
				})
			}else{
				$('input[type="checkbox"]').each(function(){
					if(!$(this).prop('checked')){
						$(this).attr("disabled",false);
						$(this).parents("li").removeClass("disabled");
					}
				})
			}
		});
	})
