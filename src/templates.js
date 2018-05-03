(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"item\">\n      <div class=\"thumbnail\">\n        <img src=\"images/products/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"image\">\n      </div>\n      <div class=\"desc\">\n        <div class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n      </div>\n      <div class=\"quantity\">"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"subtotal\">"
    + alias4(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"discount\">Order today and receive a discount of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discount : stack1), depth0))
    + "%</div>\n    <div class=\"discountTotal\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discountTotal : stack1), depth0))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class='cart'>\n  <h1>Shopping Cart</h1>\n  <div class=\"header\">\n    <div class=\"thumbnail\">Product</div>\n    <div class=\"desc\">Description</div>\n    <div class=\"quantity\">Quantity</div>\n    <div class=\"price\">Price</div>\n    <div class=\"subtotal\">Subtotal</div>\n  </div>\n  <div class=\"items\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"summary\">\n    <div class=\"total\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.total : stack1), depth0))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discount : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"cartBtn\">Checkout</div>\n  </div>\n</div>";
},"useData":true});
templates['checkout'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"item\">\n        <div class=\"thumbnail\">\n          <img src=\"images/products/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"image\">\n        </div>\n        <div class=\"desc\">\n          <div class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n        <div class=\"quantity\">"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"subtotal\">"
    + alias4(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</div>\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"discount\">Discount of "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discount : stack1), depth0))
    + "%</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"discountTotal\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discountTotal : stack1), depth0))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class='checkout'>\n  <div class='info'>\n    <form action='#'>\n      <h2>Customer Information</h2>\n      <h3>Name</h3>\n      <div class=\"formRow\">\n        <input id='firstName' type='text' placeholder=\"First\">\n        <input id='lastName' type='text' placeholder=\"Last\">\n      </div>\n      <h3>Address</h3>\n      <div class=\"formRow\">\n        <input id='address' type='text' placeholder=\"Address\">\n      </div>\n      <div class=\"formRow\">\n        <input id='city' type='text' placeholder=\"City\">\n        <input id='state' type='text' placeholder=\"State\">\n        <input id='zip' type='text' placeholder=\"Zip\">\n      </div>\n      <h2>Payment Information</h2>\n      <div class=\"formRow\">\n        <input id='card' type='text' placeholder=\"Card number\">\n        <input id='expiration' type='date' placeholder=\"Expiration\">\n        <input id='ccv' type='text' placeholder=\"CCV\">\n      </div>\n      <div class=\"checkoutBtn\" onclick=\"location.hash = '/thank_you'\">Submit Order</div>\n    </form>\n  </div>\n  <div class='cart'>\n    <h2>Order Summary</h2>\n    <div class=\"items\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"summary\">\n      <div class=\"total\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.total : stack1), depth0))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discount : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"shipping\">Free Shipping if you order in "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.shipping : stack1), depth0))
    + " minutes.</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discount : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>";
},"useData":true});
templates['product'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"category\">\n      <div class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"products\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"product\">\n          <div class=\"thumbnail\">\n            <img src=\"images/products/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"image\">\n          </div>\n          <div class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"overlay hide\">\n            <div class=\"addToCart\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " data-name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'' data-description='"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "'' data-price="
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + ">Add To Cart</div>\n          </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='store'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['thankYou'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"item\">\n        <div class=\"thumbnail\">\n          <img src=\"images/products/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"image\">\n        </div>\n        <div class=\"desc\">\n          <div class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n        <div class=\"quantity\">"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"subtotal\">"
    + alias4(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</div>\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"thankYou\">\n  <div class=\"check\">\n    <div class=\"emoji\">\n      ✓\n    </div>\n    <div class=\"thanks\">Thank you!</div>\n  </div>\n  <div class='order'>\n    <h2>Order Summary</h2>\n    <div class=\"items\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"summary\">\n      <div class=\"total\">Total: $"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discountTotal : stack1), depth0))
    + "</div>\n    </div>\n  </div>\n  <script>\n    amp.observe('Sale', { amount: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cart : depth0)) != null ? stack1.discountTotal : stack1), depth0))
    + " });\n  </script>\n</div>";
},"useData":true});
})();