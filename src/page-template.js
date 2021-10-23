// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { header } = templateData;
  
    return `
    # ${header.title}
    
    ## Description
    ${header.description}

    ##
    `;
  };