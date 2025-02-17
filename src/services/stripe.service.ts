/*import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2025-01-27.acacia',
    });
  }

  async createPaymentIntent(amount: number, currency: string, paymentMethodId?: string) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: amount * 100, // Convertir en cents
        currency,
        // Si un paymentMethodId est fourni, l'ajouter et confirmer le paiement
        ...(paymentMethodId ? { payment_method: paymentMethodId, confirm: true } : {}),
        // Active uniquement les méthodes de paiement automatiques
        automatic_payment_methods: { enabled: true },
      });

      console.log('✅ PaymentIntent créé :', paymentIntent);

      // Remarque : ici nous renvoyons "client_secret" (snake_case) pour être en cohérence avec l'API Stripe
      return {
        client_secret: paymentIntent.client_secret,
        status: paymentIntent.status,
      };
    } catch (error) {
      console.error('❌ Erreur Stripe:', error);
      throw new Error(`Erreur lors de la création du paiement : ${error.message}`);
    }
  }
}
*/
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2025-01-27.acacia',
    });
  }

  async createPaymentIntent(amount: number, currency: string): Promise<string> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: amount * 100, // Convertir en cents
        currency,
        payment_method_types: ['card'],
      });
      return paymentIntent.client_secret;
    } catch (error) {
      console.error('Erreur Stripe:', error);
      throw new Error('Erreur lors de la création du paiement');
    }
  }
}
