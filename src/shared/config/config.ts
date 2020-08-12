export class Config {

    public static getRootURL(): string {
        const LogoURL = 'http://espld205:2233';
        return LogoURL;
    }
    public static GetURL(apiURL: string): string {
        /**DEV */
        // const baseURL = 'https://strawberry-crumble-22767.herokuapp.com';
        /**TEST */
        //const baseURL = 'https://api-test-hrms-bfl.herokuapp.com';

         /**Localhost */

          const baseURL = 'https://herokutoazure-apidemo.herokuapp.com/';

        return baseURL + apiURL;
    }
    public static GetMemberURL(apiURL: string): string {
        /**DAV */
        const baseURL = 'https://espld202:5006/';
        return baseURL + apiURL;
    }
    public static GetCaptchaKey(): string {
        /**Dev */
        const _captchaKey = '6LdZhmgUAAAAAJQRaQslsDukOQROpgYfFW-d7HVA';
        /**UAT */
        // const _captchaKey = '6Lfa8GgUAAAAAKdd6tU42DK4ujPPFmVCDfUxnAGa';
        return _captchaKey;
    }
}
