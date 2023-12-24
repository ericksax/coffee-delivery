import { Wrapper } from "../../components/Coffes/styles";
import { Subtitle } from "../../components/Subtitle";
import { Bank, CreditCard, Money } from "phosphor-react";
import { Container, Main } from "./styles";
import { CheckoutCart } from "../../components/CheckoutCart";

export function CheckOut() {
  return (
    <>
      <Container>
        <Wrapper>
          <Main>
            <div>
              <h2>Complete seu pedido</h2>
              <section>
                <div>
                  <Subtitle
                    icon={"mapPinLine"}
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                  />
                  <form>
                    <div>
                      <input type="text" name="CEP" placeholder="CEP" />
                    </div>
                    <div>
                      <input type="text" placeholder="Rua" />
                    </div>
                    <div className="two-columns">
                      <input type="text" placeholder="Número" />
                      <input type="text" placeholder="Complemento" />
                    </div>
                    <div className="three-columns">
                      <input type="text" placeholder="Bairro" />
                      <input type="text" placeholder="Cidade" />
                      <input type="text" placeholder="UF" />
                    </div>
                  </form>
                </div>

                <div className="payment-information">
                  <Subtitle
                    icon={"currencyDolar"}
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                  />
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment"
                      defaultChecked
                    />
                    <label htmlFor="credit-card">
                      <CreditCard size={16} />
                      CARTÃO DE CREDITO
                    </label>

                    <input type="radio" id="debit-card" name="payment" />
                    <label htmlFor="debit-card">
                      <Bank size={16} />
                      CARTÃO DE DÉBITO
                    </label>

                    <input type="radio" id="cash" name="payment" />
                    <label htmlFor="cash">
                      <Money size={16} />
                      DINHEIRO
                    </label>
                  </div>
                </div>
              </section>
            </div>
            <div className="coffe-checkout-list">
              <h2>Cafés selecionados</h2>
              <section>
                <CheckoutCart />
              </section>
            </div>
          </Main>
        </Wrapper>
      </Container>
    </>
  );
}
