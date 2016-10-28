/* Based on the amazing Cloud-To-Butt extension */

walk(document.body);

function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  v = v.replace(/\b(B|b)rexit/g, function(match, p1, offset, string) {
    return p1 + "reakfast";
  });
	textNode.nodeValue = v;
}


