const yarrrml = require('@rmlio/yarrrml-parser/lib/rml-generator')
const N3 = require('n3')
function parseFile(req){
    return new Promise((resolve, reject) => {
        const mapping = req.body.mapping;
        const y2r = new yarrrml();
        const triples = y2r.convert(mapping);    
        if ( y2r.getLogger().has('error') ) {
            const logs = y2r.getLogger().getAll();
            console.trace(logs)
            reject()
         }
         const prefixes = y2r.getPrefixes();
         const writer = new N3.Writer({ prefixes: prefixes});
         writer.addQuads(triples);
         writer.end((error, result) => {
             if(error){
                 console.trace(error)
                 reject()
             }
             resolve(result)
         })
    })
    }


module.exports =  {
    parseFile
}