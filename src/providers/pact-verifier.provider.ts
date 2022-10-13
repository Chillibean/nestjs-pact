import { Provider } from '@nestjs/common';
import { Verifier } from '@pact-foundation/pact';
import { PactProviderOptions } from 'src/interfaces/pact-provider-module-options.interface';
import { PactModuleProviders } from '../common/pact-module-providers.enum';

export const PactVerifierProvider: Provider<Verifier> = {
  provide: PactModuleProviders.PactVerifier,
  useFactory: (config: PactProviderOptions) => new Verifier(config),
  inject: [PactModuleProviders.ProviderOptions],
};
