"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateAllProps=validateAllProps;var errors_1=()=>{var tmp=require("../errors");return errors_1=()=>tmp,tmp};function validateAllProps(scope,className,props,rules){const validationErrors=rules.filter(rule=>rule.condition(props)).map(rule=>rule.message(props));if(validationErrors.length>0){const errorMessage=`${className} initialization failed due to the following validation error(s):
${validationErrors.map(error=>`- ${error}`).join(`
`)}`;throw new(errors_1()).ValidationError(errorMessage,scope)}}
