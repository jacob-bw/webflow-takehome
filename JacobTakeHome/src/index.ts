document.getElementById("text").onsubmit = async (event) => {
  event.preventDefault()
  // prevents default submit behavior

    const el = await webflow.getSelectedElement()
    //get the DOM Element currently selected in the Designer

  let myExampleStyle = webflow.createStyle('myExampleStyle');
  // creates new style as a class called "myExampleStyle"
  myExampleStyle.setProperties({ color: 'red', 'font-size': '40px', 'font-family':'Libre Baskerville'});
  // sets properties for newly created style/class

  let styleProperties = myExampleStyle.getProperties();
  console.log("stylename: ", myExampleStyle.getName(), "Style Properties:", styleProperties);
  // console logs the name and properties of the style

  // console.log(el)
 
  if (el && el.styles) {
      // If we found the element and it has the ability to update the style  

    el.setStyles([myExampleStyle]);
    // applies the style properties as defined above to the selected text element

    await el.save()
    // saves the changes to the element 
    // they will now be reflected in the Designer
    // NOTE: Style names *must* be unique within the site. If not, application will encounter a save error.
  }
}