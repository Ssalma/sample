 /**
  * check if a string matches another string above a certain threshold
  * @param str - the subject string
  * @param reference - the comparison string
  * @param threshold - percentage to consider a match (inclusive)
  */
 export function isMatch (str: string, reference: string, threshold = 0.4) {
  const ignoredWords = ["management"]
  let totalLength = reference.length;
  let matchedLength = 0
  const parts = str.toLowerCase().split(" ")

  parts.forEach(part => {
   // if part exists in reference
   if (reference.toLowerCase().includes(part)) {
    matchedLength += part.length
    // and is an ignored word
    if (ignoredWords.includes(part)) {
     matchedLength -= part.length
    }
  }
})
  ignoredWords.forEach((word) => {
    if(reference.toLowerCase().includes(word)){
      totalLength -= word.length
    }
  })

  // if (matchedLength)
  // {console.log(`${str} contains a ${((matchedLength / totalLength) * 100).toFixed(2)}% match to ${reference}`)}

  return (matchedLength / totalLength) >= threshold
 }
