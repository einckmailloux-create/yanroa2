import Navbar from './Navbar';
import Footer from './Footer';
import { Headphones, Clock, Shield, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';

function AfterSalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Headphones className="w-8 h-8" style={{color: '#1C2B3A'}} />
              <h1 className="text-4xl font-light tracking-wide" style={{color: '#1F1F1F'}}>
                售后服务
              </h1>
            </div>
            <p className="text-sm max-w-2xl mx-auto" style={{color: '#6B7280'}}>
              我们致力于为每一位客户提供专业、贴心的售后服务，确保您的满意与安心
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  服务承诺
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border p-6 hover:shadow-lg transition" style={{borderColor: '#E5E7EB'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F3F4F6'}}>
                      <CheckCircle className="w-5 h-5" style={{color: '#1C2B3A'}} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2" style={{color: '#1F1F1F'}}>
                        专业保障
                      </h3>
                      <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                        所有项目由资深医师操作，确保安全与效果
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border p-6 hover:shadow-lg transition" style={{borderColor: '#E5E7EB'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F3F4F6'}}>
                      <CheckCircle className="w-5 h-5" style={{color: '#1C2B3A'}} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2" style={{color: '#1F1F1F'}}>
                        定期回访
                      </h3>
                      <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                        术后专人跟进恢复情况，及时解答疑问
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border p-6 hover:shadow-lg transition" style={{borderColor: '#E5E7EB'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F3F4F6'}}>
                      <CheckCircle className="w-5 h-5" style={{color: '#1C2B3A'}} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2" style={{color: '#1F1F1F'}}>
                        效果保证
                      </h3>
                      <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                        若效果不理想，提供免费补救或调整方案
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border p-6 hover:shadow-lg transition" style={{borderColor: '#E5E7EB'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F3F4F6'}}>
                      <CheckCircle className="w-5 h-5" style={{color: '#1C2B3A'}} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2" style={{color: '#1F1F1F'}}>
                        隐私保护
                      </h3>
                      <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                        严格保密客户信息，尊重个人隐私
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  售后流程
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{backgroundColor: '#1C2B3A'}}>
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-medium mb-1" style={{color: '#1F1F1F'}}>提交申请</h3>
                    <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                      通过电话、邮件或在线客服提交售后服务申请
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{backgroundColor: '#1C2B3A'}}>
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-medium mb-1" style={{color: '#1F1F1F'}}>专员受理</h3>
                    <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                      专业售后团队在24小时内响应并评估情况
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{backgroundColor: '#1C2B3A'}}>
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-medium mb-1" style={{color: '#1F1F1F'}}>制定方案</h3>
                    <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                      根据具体情况制定个性化解决方案
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{backgroundColor: '#1C2B3A'}}>
                    4
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-medium mb-1" style={{color: '#1F1F1F'}}>执行服务</h3>
                    <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                      安排预约时间，提供专业的售后服务
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{backgroundColor: '#1C2B3A'}}>
                    5
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-medium mb-1" style={{color: '#1F1F1F'}}>跟踪反馈</h3>
                    <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                      持续跟进服务效果，确保客户满意
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  联系售后
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-sm mb-6 leading-relaxed" style={{color: '#4B5563'}}>
                  如果您在使用服务过程中遇到任何问题，或需要售后支持，请随时通过以下方式联系我们：
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+8617891972388"
                    className="flex items-center gap-4 p-4 bg-white border hover:shadow-md transition group"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition" style={{backgroundColor: '#1C2B3A'}}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{color: '#6B7280'}}>客服热线</p>
                      <p className="text-base font-medium" style={{color: '#1F1F1F'}}>+86 178 9197 2388</p>
                    </div>
                  </a>

                  <a
                    href="mailto:yanora@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white border hover:shadow-md transition group"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition" style={{backgroundColor: '#1C2B3A'}}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{color: '#6B7280'}}>电子邮箱</p>
                      <p className="text-base font-medium" style={{color: '#1F1F1F'}}>yanora@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t" style={{borderColor: '#E5E7EB'}}>
                  <p className="text-xs" style={{color: '#6B7280'}}>
                    服务时间：周一至周日 9:00 - 21:00
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AfterSalesPage;
