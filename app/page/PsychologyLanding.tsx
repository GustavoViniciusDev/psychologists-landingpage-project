'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Clock,
  Shield,
  Percent,
  User,
  Briefcase,
  Monitor,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PsychologyLanding() {
  return (
    <>
      {/* Top Portfolio Disclaimer Banner */}
      <div
        className="w-full bg-amber-100 text-amber-900 text-center text-xs md:text-sm py-2 px-4"
        role="alert"
        aria-live="polite"
      >
        <span className="font-semibold">Projeto de Portfólio:</span> Este site é fictício e não representa um serviço psicológico real.
      </div>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Cuidar da mente é essencial para uma vida equilibrada
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Atendimento psicológico online e presencial com acolhimento e ética
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
              >
                Agende sua consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale pelo WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Sobre a Psicóloga */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/img/dr-Mariana-Lopes.png"
                alt="Dra. Mariana Lopes"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 shadow-lg"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Dra. Mariana Lopes</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Psicóloga especializada em ansiedade, estresse e desenvolvimento pessoal. Com mais de 8 anos de
                experiência, dedico-me a oferecer um atendimento humanizado e personalizado para cada paciente.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Serviços Oferecidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Terapia Individual</h3>
                  <p className="text-slate-600">Atendimento personalizado para suas necessidades específicas</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Orientação Profissional</h3>
                  <p className="text-slate-600">Descubra sua vocação e construa uma carreira satisfatória</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Terapia Online</h3>
                  <p className="text-slate-600">Atendimento à distância com toda segurança e privacidade</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Atendimento para Adolescentes</h3>
                  <p className="text-slate-600">Suporte especializado para jovens em desenvolvimento</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              Por que escolher nosso atendimento?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Atendimento Humanizado</h3>
                  <p className="text-slate-600">Cada pessoa é única e merece um cuidado personalizado e acolhedor</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Flexibilidade de Horários</h3>
                  <p className="text-slate-600">Horários que se adaptam à sua rotina, incluindo fins de semana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Sigilo Profissional</h3>
                  <p className="text-slate-600">Total confidencialidade e respeito à sua privacidade</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Percent className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Primeira Sessão com Desconto</h3>
                  <p className="text-slate-600">Conheça nosso trabalho com condições especiais na primeira consulta</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              O que dizem nossos pacientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "A Dra. Mariana me ajudou muito a lidar com minha ansiedade. Seu atendimento é muito acolhedor e
                    profissional."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/img/ana-silva.png?height=50&width=50"
                      alt="Ana Silva"
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">Ana Silva</p>
                      <p className="text-sm text-slate-500">Paciente há 6 meses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "Excelente profissional! Me sinto muito mais confiante e equilibrado após iniciar o tratamento."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/img/carlos-santos.png?height=50&width=50"
                      alt="Carlos Santos"
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">Carlos Santos</p>
                      <p className="text-sm text-slate-500">Paciente há 1 ano</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "A terapia online foi perfeita para minha rotina. Recomendo muito o trabalho da Dra. Mariana."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/img/maria-oliveira.png?height=50&width=50"
                      alt="Maria Oliveira"
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">Maria Oliveira</p>
                      <p className="text-sm text-slate-500">Paciente há 8 meses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção de Agendamento */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Agende sua consulta</h2>
              <p className="text-lg text-slate-600">Dê o primeiro passo para uma vida mais equilibrada</p>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome completo
                    </label>
                    <Input id="name" placeholder="Seu nome completo" className="w-full p-3 border-slate-300 rounded-lg" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full p-3 border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone/WhatsApp
                    </label>
                    <Input id="phone" placeholder="(11) 99999-9999" className="w-full p-3 border-slate-300 rounded-lg" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte um pouco sobre o que você gostaria de trabalhar..."
                      className="w-full p-3 border-slate-300 rounded-lg"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-full shadow-lg"
                  >
                    Agende sua consulta agora
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-500 mb-4">Ou entre em contato diretamente:</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 rounded-full bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: (11) 99999-9999
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-slate-800 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Dra. Mariana Lopes</h3>
                <p className="text-slate-300 mb-4">Psicóloga CRP 06/123456</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">contato@marianalopes.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">São Paulo, SP</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                      Política de Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                      Código de Ética
                    </Link>
                  </li>
                  <li>
                    <Link href="#disclaimer" className="text-slate-300 hover:text-white transition-colors">
                      Aviso Legal (Projeto de Portfólio)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              {/* Footer Portfolio Disclaimer */}
              <p
                id="disclaimer"
                className="text-slate-400 text-xs md:text-sm mb-4 max-w-3xl mx-auto leading-relaxed"
              >
                Este site foi desenvolvido apenas para fins de portfólio. A profissional, os depoimentos, dados de contato e demais informações são fictícios e não representam serviços psicológicos reais.
              </p>
              <p className="text-slate-400 text-sm">
                © 2025 | Criado e codificado por{" "}
                <a
                    href="https://gustavoviniciusdev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500 underline underline-offset-2"
                >
                    Gustavo Vinicius
                </a>
                .
                </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
