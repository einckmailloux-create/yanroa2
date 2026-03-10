import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8" style={{color: '#1C2B3A'}} />
              <h1 className="text-4xl font-light tracking-wide" style={{color: '#1F1F1F'}}>
                隐私政策
              </h1>
            </div>
            <p className="text-sm" style={{color: '#6B7280'}}>
              最后更新日期：{new Date().toLocaleDateString('zh-CN')}
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  信息收集
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed" style={{color: '#4B5563'}}>
                <p>
                  我们收集您在使用我们服务时提供的信息，包括但不限于：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>个人身份信息（姓名、电子邮箱、电话号码）</li>
                  <li>账户信息（用户名、密码）</li>
                  <li>预约信息（服务类型、预约时间、偏好设置）</li>
                  <li>支付信息（交易记录、支付方式）</li>
                  <li>设备信息（IP地址、浏览器类型、操作系统）</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  信息使用
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed" style={{color: '#4B5563'}}>
                <p>
                  我们使用收集的信息用于以下目的：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>提供、维护和改进我们的服务</li>
                  <li>处理您的预约和支付</li>
                  <li>向您发送服务相关的通知和更新</li>
                  <li>回复您的咨询和提供客户支持</li>
                  <li>分析使用趋势以优化用户体验</li>
                  <li>防止欺诈和确保平台安全</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  信息保护
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed" style={{color: '#4B5563'}}>
                <p>
                  我们采取合理的技术和组织措施来保护您的个人信息：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>使用加密技术保护数据传输</li>
                  <li>实施严格的访问控制和身份验证</li>
                  <li>定期进行安全审计和漏洞扫描</li>
                  <li>员工签署保密协议并接受隐私培训</li>
                  <li>限制只有授权人员才能访问个人信息</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  您的权利
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed" style={{color: '#4B5563'}}>
                <p>
                  根据适用的隐私法律，您拥有以下权利：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>访问权：查看我们持有的您的个人信息</li>
                  <li>更正权：更新或修正不准确的信息</li>
                  <li>删除权：要求删除您的个人信息</li>
                  <li>限制权：限制我们处理您的信息</li>
                  <li>反对权：反对我们使用您的信息</li>
                  <li>可携权：以结构化格式接收您的数据</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6" style={{color: '#1C2B3A'}} />
                <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>
                  联系我们
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed" style={{color: '#4B5563'}}>
                <p>
                  如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="font-medium" style={{color: '#1F1F1F'}}>邮箱：</span>
                    <a href="mailto:yanora@gmail.com" className="hover:underline" style={{color: '#1C2B3A'}}>
                      yanora@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium" style={{color: '#1F1F1F'}}>电话：</span>
                    <a href="tel:+8617891972388" className="hover:underline" style={{color: '#1C2B3A'}}>
                      +86 178 9197 2388
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t pt-8" style={{borderColor: '#E5E7EB'}}>
              <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                我们可能会不时更新本隐私政策。我们会在本页面上发布新的隐私政策，并更新"最后更新日期"。
                我们建议您定期查看本政策以了解任何变化。
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
