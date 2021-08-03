declare module 'ims-lti' {
    
export type LtiRequestBody = {[key: string]: string}

export type LtiRequest = {
    body: LtiRequestBody,
    originalUrl: string,
    protocol: string,
        headers: {
            host: string
        },
        method: string
    }
}

export class Provider {

    constructor (consumerKey: string, consumerSecret: string);
  
    parse_request(request: null, body: LtiRequestBody): void;
  
    valid_request(request: LtiRequest, cb: (error: Error | undefined, isValid: boolean) => void)
  
}

export class OutcomeService {

    send_replace_result_with_lti_launch_url(score: string | null, url: string, cb: (error: Error | undefined, success: boolean) => void)

}

export const Extensions = {
    Outcomes: {
        init(provider: Provider): OutcomeService;
    }
}
