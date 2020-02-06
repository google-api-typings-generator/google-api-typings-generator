// Type definitions for non-npm package Cloud Text-to-Speech API v1 1.0
// Project: https://cloud.google.com/text-to-speech/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://texttospeech.googleapis.com/$discovery/rest?version=v1

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Text-to-Speech API v1 */
    function load(name: "texttospeech", version: "v1"): PromiseLike<void>;
    function load(name: "texttospeech", version: "v1", callback: () => any): void;

    namespace texttospeech {
        interface AudioConfig {
            /** Required. The format of the audio byte stream. */
            audioEncoding?: string;
            /**
             * Optional. Input only. An identifier which selects 'audio effects' profiles
             * that are applied on (post synthesized) text to speech. Effects are applied
             * on top of each other in the order they are given. See
             * [audio
             * profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for
             * current supported profile ids.
             */
            effectsProfileId?: string[];
            /**
             * Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means
             * increase 20 semitones from the original pitch. -20 means decrease 20
             * semitones from the original pitch.
             */
            pitch?: number;
            /**
             * Optional. The synthesis sample rate (in hertz) for this audio. When this is
             * specified in SynthesizeSpeechRequest, if this is different from the voice's
             * natural sample rate, then the synthesizer will honor this request by
             * converting to the desired sample rate (which might result in worse audio
             * quality), unless the specified sample rate is not supported for the
             * encoding chosen, in which case it will fail the request and return
             * google.rpc.Code.INVALID_ARGUMENT.
             */
            sampleRateHertz?: number;
            /**
             * Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is
             * the normal native speed supported by the specific voice. 2.0 is twice as
             * fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0
             * speed. Any other values < 0.25 or > 4.0 will return an error.
             */
            speakingRate?: number;
            /**
             * Optional. Input only. Volume gain (in dB) of the normal native volume
             * supported by the specific voice, in the range [-96.0, 16.0]. If unset, or
             * set to a value of 0.0 (dB), will play at normal native signal amplitude. A
             * value of -6.0 (dB) will play at approximately half the amplitude of the
             * normal native signal amplitude. A value of +6.0 (dB) will play at
             * approximately twice the amplitude of the normal native signal amplitude.
             * Strongly recommend not to exceed +10 (dB) as there's usually no effective
             * increase in loudness for any value greater than that.
             */
            volumeGainDb?: number;
        }
        interface ListVoicesResponse {
            /** The list of voices. */
            voices?: Voice[];
        }
        interface SynthesisInput {
            /**
             * The SSML document to be synthesized. The SSML document must be valid
             * and well-formed. Otherwise the RPC will fail and return
             * google.rpc.Code.INVALID_ARGUMENT. For more information, see
             * [SSML](/speech/text-to-speech/docs/ssml).
             */
            ssml?: string;
            /** The raw text to be synthesized. */
            text?: string;
        }
        interface SynthesizeSpeechRequest {
            /** Required. The configuration of the synthesized audio. */
            audioConfig?: AudioConfig;
            /** Required. The Synthesizer requires either plain text or SSML as input. */
            input?: SynthesisInput;
            /** Required. The desired voice of the synthesized audio. */
            voice?: VoiceSelectionParams;
        }
        interface SynthesizeSpeechResponse {
            /**
             * The audio data bytes encoded as specified in the request, including the
             * header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS).
             * For LINEAR16 audio, we include the WAV header. Note: as
             * with all bytes fields, protobuffers use a pure binary representation,
             * whereas JSON representations use base64.
             */
            audioContent?: string;
        }
        interface Voice {
            /**
             * The languages that this voice supports, expressed as
             * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g.
             * "en-US", "es-419", "cmn-tw").
             */
            languageCodes?: string[];
            /** The name of this voice.  Each distinct voice has a unique name. */
            name?: string;
            /** The natural sample rate (in hertz) for this voice. */
            naturalSampleRateHertz?: number;
            /** The gender of this voice. */
            ssmlGender?: string;
        }
        interface VoiceSelectionParams {
            /**
             * Required. The language (and potentially also the region) of the voice expressed as a
             * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g.
             * "en-US". This should not include a script tag (e.g. use
             * "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred
             * from the input provided in the SynthesisInput.  The TTS service
             * will use this parameter to help choose an appropriate voice.  Note that
             * the TTS service may choose a voice with a slightly different language code
             * than the one selected; it may substitute a different region
             * (e.g. using en-US rather than en-CA if there isn't a Canadian voice
             * available), or even a different language, e.g. using "nb" (Norwegian
             * Bokmal) instead of "no" (Norwegian)".
             */
            languageCode?: string;
            /**
             * The name of the voice. If not set, the service will choose a
             * voice based on the other parameters such as language_code and gender.
             */
            name?: string;
            /**
             * The preferred gender of the voice. If not set, the service will
             * choose a voice based on the other parameters such as language_code and
             * name. Note that this is only a preference, not requirement; if a
             * voice of the appropriate gender is not available, the synthesizer should
             * substitute a voice with a different gender rather than failing the request.
             */
            ssmlGender?: string;
        }
        interface TextResource {
            /**
             * Synthesizes speech synchronously: receive results after all text input
             * has been processed.
             */
            synthesize(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: SynthesizeSpeechRequest;
            }): Request<SynthesizeSpeechResponse>;
            synthesize(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: SynthesizeSpeechRequest): Request<SynthesizeSpeechResponse>;
        }
        interface VoicesResource {
            /** Returns a list of Voice supported for synthesis. */
            list(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Optional. Recommended.
                 * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If
                 * specified, the ListVoices call will only return voices that can be used to
                 * synthesize this language_code. E.g. when specifying "en-NZ", you will get
                 * supported "en-&#42;" voices; when specifying "no", you will get supported
                 * "no-&#42;" (Norwegian) and "nb-&#42;" (Norwegian Bokmal) voices; specifying "zh"
                 * will also get supported "cmn-&#42;" voices; specifying "zh-hk" will also get
                 * supported "yue-&#42;" voices.
                 */
                languageCode?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListVoicesResponse>;
        }

        const text: TextResource;

        const voices: VoicesResource;
    }
}
