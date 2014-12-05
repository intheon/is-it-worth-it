$("#moneyInput").on("keyup",function(){

	var amount = $(this).val();

		if (amount)
		{
			var taxed = (amount / 10) * 2;
			$(".after_tax").html("After Tax: " + (amount - taxed));
			$(".monthly_rate_before").html("Monthly Tax Rate (before): " + (amount / 12));
			$(".monthly_rate_after").html("Monthly Tax Rate (after): " + (amount - taxed) / 12);
			$(".tax_per_month").html("Monthly Tax Rate: " + (taxed / 12));
			$(".total_tax").html("Total Tax: " + (taxed));
		}
});