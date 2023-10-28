import  jwt  from 'jsonwebtoken';
/**
 * 
 * @param {*} dataObject Object to encript 
 * @param {*} secretKey 
 * @param {*} timeExpire 
 * @returns 
 */
export const encriptedObject = (dataObject,secretKey,timeExpire) => jwt.sign( dataObject , secretKey , { expiresIn: timeExpire });
/**
 * 
 * @param {*} tokenEncripted 
 * @param {*} secretKey 
 * @returns 
 */
export const descript = async (tokenEncripted,secretKey) => {
    try {
          const object = jwt.verify(tokenEncripted,secretKey); 
            return object;      
    } catch (error) {
        console.log(error);
            return null;
    }
}
