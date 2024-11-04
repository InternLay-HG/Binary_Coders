const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            return next(err)
        })
    }
}


class ApiResponse{
    constructor(
        statusCode,
        data,
        message=""
    ){
       this.statusCode=statusCode
       this.data=data
       this.success=statusCode < 400
       this.message=message

    }
}
export {ApiResponse}


export { asyncHandler,ApiResponse }